import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const EditableSliderInputSingle = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
          {label}
        </Text>
        <Box width={{ base: "80px", md: "120px" }}>
          <Input
            value={isFocused ? value : `${value} ${unit}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              const newVal = parseFloat(e.target.value);
              if (!isNaN(newVal)) {
                onChange(newVal);
              }
            }}
            size="sm"
            textAlign="right"
          />
        </Box>
      </Flex>
      <Slider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        focusThumbOnChange={false}
      >
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg="#00b386" />
        </SliderTrack>
        <SliderThumb boxSize={6} bg="#00b386" />
      </Slider>
    </Box>
  );
};

const SIPCalculator = () => {
  const [sipAmount, setSipAmount] = useState(10000);
  const [sipYears, setSipYears] = useState(10);
  const [sipRate, setSipRate] = useState(8);

  const [lumpsumAmount, setLumpsumAmount] = useState(50000);
  const [lumpsumYears, setLumpsumYears] = useState(10);
  const [lumpsumRate, setLumpsumRate] = useState(8);

  const [sipTotalAmount, setSipTotalAmount] = useState(null);
  const [sipTotalInvestment, setSipTotalInvestment] = useState(null);
  const [sipReturns, setSipReturns] = useState(null);

  const [lumpsumTotalAmount, setLumpsumTotalAmount] = useState(null);
  const [lumpsumTotalInvestment, setLumpsumTotalInvestment] = useState(null);
  const [lumpsumReturns, setLumpsumReturns] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const futureValue =
      sipAmount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const totalInvested = sipAmount * months;
    const totalReturns = futureValue - totalInvested;

    setSipTotalAmount(futureValue.toFixed(2));
    setSipTotalInvestment(totalInvested.toFixed(2));
    setSipReturns(totalReturns.toFixed(2));
  };

  const calculateLumpsum = () => {
    const lumpsumRateMonthly = lumpsumRate / 12 / 100;
    const months = lumpsumYears * 12;
    const futureValue =
      lumpsumAmount * Math.pow(1 + lumpsumRateMonthly, months);
    const totalInvested = lumpsumAmount;
    const totalReturns = futureValue - totalInvested;

    setLumpsumTotalAmount(futureValue.toFixed(2));
    setLumpsumTotalInvestment(totalInvested.toFixed(2));
    setLumpsumReturns(totalReturns.toFixed(2));
  };

  const defaultData = {
    labels: ["Invested Amount", "Returns"],
    datasets: [
      {
        label: "Investment",
        data: [50, 50],
        backgroundColor: ["#00b386", "#FF6347"],
        borderColor: ["#4BC0C0", "#FFCE56"], 
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const sipData = sipTotalAmount
    ? {
        labels: ["Invested Amount", "Returns"],
        datasets: [
          {
            label: "SIP Investment",
            data: [sipTotalInvestment, sipReturns],
            backgroundColor: ["#00b386", "#FF6347"],
            borderColor: ["#4BC0C0", "#FFCE56"],
            borderWidth: 1,
            hoverOffset: 4,
          },
        ],
      }
    : defaultData;

  const lumpsumData = lumpsumTotalAmount
    ? {
        labels: ["Invested Amount", "Returns"],
        datasets: [
          {
            label: "Lumpsum Investment",
            data: [lumpsumTotalInvestment, lumpsumReturns],
            backgroundColor: ["#00b386", "#FF6347"],
            borderColor: ["#4BC0C0", "#FFCE56"],
            borderWidth: 1,
            hoverOffset: 4,
          },
        ],
      }
    : defaultData;

  const chartSize = useBreakpointValue({ base: 350, md: 250, lg: 300 });

  return (
    <Box
      py={10}
      px={{ base: 4, md: 8, lg: 24 }}
      bg="#fbfcfd"
      borderRadius="lg"
      border={"1px solid black"}
      boxShadow="10px 10px black"
      maxW="container.lg"
      mx={{base: '16px', md: 'auto'}}
      mb={6}
      mt={8}
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        mb={6}
        textAlign="center"
      >
        Investment Calculator
      </Text>

      <Tabs variant="enclosed" colorScheme="teal">
        <TabList justifyContent="center">
          <Tab
            fontSize={{ base: "md", md: "xl" }}
            color={"#00b386"}
            fontWeight="semibold"
          >
            SIP Calculator
          </Tab>
          <Tab
            fontSize={{ base: "md", md: "xl" }}
            color={"#00b386"}
            fontWeight="semibold"
          >
            Lumpsum Calculator
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              gap={8}
            >
              <Box flex="1" w="full">
                <Stack spacing={6}>
                  <EditableSliderInputSingle
                    label="Monthly SIP Amount (₹)"
                    value={sipAmount}
                    onChange={setSipAmount}
                    min={1000}
                    max={100000}
                    step={1000}
                    unit="₹"
                  />
                  <EditableSliderInputSingle
                    label="Investment Tenure (Years)"
                    value={sipYears}
                    onChange={setSipYears}
                    min={1}
                    max={30}
                    step={1}
                    unit="yrs"
                  />
                  <EditableSliderInputSingle
                    label="Expected Annual Return (%)"
                    value={sipRate}
                    onChange={setSipRate}
                    min={1}
                    max={20}
                    step={0.5}
                    unit="%"
                  />
                  <Button
                    bg="#00b386"
                    color={"white"}
                    onClick={calculateSIP}
                    size="lg"
                    mt={4}
                  >
                    Calculate SIP
                  </Button>
                  {sipTotalAmount && (
                    <Box mt={6}>
                      <Text fontSize={{ base: "sm", md: "lg" }}>
                        <strong>Total Investment:</strong> ₹{sipTotalInvestment}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "lg" }}>
                        <strong>Estimated Value After {sipYears} Years:</strong>{" "}
                        ₹{sipTotalAmount}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "lg" }}>
                        <strong>Total Returns:</strong> ₹{sipReturns}
                      </Text>
                    </Box>
                  )}
                </Stack>
              </Box>

              <Box
                flex="1"
                justify="center"
                width={`${chartSize}px`}
                height={`${chartSize}px`}
              >
                <Doughnut
                  data={sipData}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                />
              </Box>
            </Flex>
          </TabPanel>

          <TabPanel>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              gap={8}
            >
              <Box flex="1" w="full">
                <Stack spacing={6}>
                  <EditableSliderInputSingle
                    label="Lumpsum Amount (₹)"
                    value={lumpsumAmount}
                    onChange={setLumpsumAmount}
                    min={10000}
                    max={1000000}
                    step={10000}
                    unit="₹"
                  />
                  <EditableSliderInputSingle
                    label="Investment Tenure (Years)"
                    value={lumpsumYears}
                    onChange={setLumpsumYears}
                    min={1}
                    max={30}
                    step={1}
                    unit="yrs"
                  />
                  <EditableSliderInputSingle
                    label="Expected Annual Return (%)"
                    value={lumpsumRate}
                    onChange={setLumpsumRate}
                    min={1}
                    max={20}
                    step={0.5}
                    unit="%"
                  />
                  <Button
                    bg="#00b386"
                    color={"white"}
                    onClick={calculateLumpsum}
                    size="lg"
                    mt={4}
                  >
                    Calculate Lumpsum
                  </Button>
                  {lumpsumTotalAmount && (
                    <Box mt={6}>
                      <Text fontSize={{ base: "sm", md: "lg" }}>
                        <strong>Total Investment:</strong> ₹
                        {lumpsumTotalInvestment}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "lg" }}>
                        <strong>
                          Estimated Value After {lumpsumYears} Years:
                        </strong>{" "}
                        ₹{lumpsumTotalAmount}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "lg" }}>
                        <strong>Total Returns:</strong> ₹{lumpsumReturns}
                      </Text>
                    </Box>
                  )}
                </Stack>
              </Box>

              <Box
                flex="1"
                justify="center"
                width={`${chartSize}px`}
                height={{base: '150px', md: `${chartSize}px`}}
              >
                <Doughnut
                  data={lumpsumData}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                />
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SIPCalculator;
