"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react"

interface CalculatorState {
  employees: number
  hoursPerWeek: number
  hourlyRate: number
  manualRepetitiveTasks: number
  errorRate: number
  automationCost: number
}

interface ROIMetrics {
  weeklySavings: number
  yearlySavings: number
  productivityGain: number
  errorReduction: number
  paybackPeriod: number
  roiThreeYears: number
}

export function ROICalculator() {
  const [values, setValues] = useState<CalculatorState>({
    employees: 5,
    hoursPerWeek: 10,
    hourlyRate: 25,
    manualRepetitiveTasks: 15,
    errorRate: 5,
    automationCost: 5000,
  })

  const [calculatedValues, setCalculatedValues] = useState<ROIMetrics | null>(null)

  const calculateROI = () => {
    const {
      employees,
      hoursPerWeek,
      hourlyRate,
      manualRepetitiveTasks,
      errorRate,
      automationCost,
    } = values

    // Calculate time savings
    const hoursSavedPerWeek = employees * hoursPerWeek * (manualRepetitiveTasks / 100)
    const weeklySavings = hoursSavedPerWeek * hourlyRate
    const yearlySavings = weeklySavings * 52

    // Calculate productivity gain (conservative estimate: 20-30% productivity increase)
    const productivityGain = 25

    // Calculate error reduction
    const errorReduction = Math.min(errorRate * 0.8, errorRate)

    // Calculate payback period
    const paybackPeriod = automationCost / (yearlySavings * 0.7) // 70% efficiency factor

    // Calculate 3-year ROI
    const threeYearBenefits = yearlySavings * 3 + (yearlySavings * 0.15) // 15% yearly growth
    const roiThreeYears = ((threeYearBenefits - automationCost) / automationCost) * 100

    setCalculatedValues({
      weeklySavings,
      yearlySavings,
      productivityGain,
      errorReduction,
      paybackPeriod,
      roiThreeYears,
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return Math.round(value).toLocaleString()
  }

  return (
    <section id="roi-calculator" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ROI Calculator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            Calculate your potential savings and return on investment with our automation solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Your Business Metrics
                </CardTitle>
                <CardDescription>
                  Adjust these values to match your business operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(values).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <label className="text-sm font-medium flex items-center justify-between">
                      <span>
                        {key === 'employees' && 'Number of Employees'}
                        {key === 'hoursPerWeek' && 'Hours/Week on Repetitive Tasks'}
                        {key === 'hourlyRate' && 'Average Hourly Rate ($USD)'}
                        {key === 'manualRepetitiveTasks' && '% of Tasks That Are Repetitive'}
                        {key === 'errorRate' && 'Current Error Rate (%)'}
                        {key === 'automationCost' && 'Estimated Automation Cost'}
                      </span>
                      <span className="text-muted-foreground">
                        {key.includes('hourlyRate') || key.includes('automationCost') ? 
                          formatCurrency(value) : value}
                      </span>
                    </label>
                    <div className="relative">
                      {/* Progress fill background */}
                      <div 
                        className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-green-500/30 to-green-600/40 rounded-full -translate-y-1/2 pointer-events-none transition-all duration-200 ease-out"
                        style={{
                          width: `${(
                            (value - (key === 'hourlyRate' || key === 'automationCost' ? 10 : 
                              key === 'manualRepetitiveTasks' || key === 'errorRate' ? 1 : 
                              key === 'employees' ? 1 : key === 'hoursPerWeek' ? 1 : 0)) / 
                            ((key === 'hourlyRate' ? 200 : 
                              key === 'automationCost' ? 50000 : 
                              key === 'manualRepetitiveTasks' ? 50 : 
                              key === 'errorRate' ? 20 : 
                              key === 'employees' ? 100 : 60) - 
                              (key === 'hourlyRate' || key === 'automationCost' ? 10 : 
                                key === 'manualRepetitiveTasks' || key === 'errorRate' ? 1 : 
                                key === 'employees' ? 1 : key === 'hoursPerWeek' ? 1 : 0))
                          ) * 100}%`
                        }}
                      />
                      <input
                        type="range"
                        min={key === 'hourlyRate' || key === 'automationCost' ? 10 : 
                            key === 'manualRepetitiveTasks' || key === 'errorRate' ? 1 : 
                            key === 'employees' ? 1 : key === 'hoursPerWeek' ? 1 : 0}
                        max={key === 'hourlyRate' ? 200 : 
                            key === 'automationCost' ? 50000 : 
                            key === 'manualRepetitiveTasks' ? 50 : 
                            key === 'errorRate' ? 20 : 
                            key === 'employees' ? 100 : 60}
                        value={value}
                        onChange={(e) => setValues(prev => ({
                          ...prev,
                          [key]: parseInt(e.target.value)
                        }))}
                        className="w-full relative z-10"
                      />
                    </div>
                  </div>
                ))}

                <Button 
                  onClick={calculateROI} 
                  size="lg" 
                  className="w-full"
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {calculatedValues ? (
              <div className="space-y-6">
                <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Your ROI Results
                    </CardTitle>
                    <CardDescription>
                      Based on your input, here's what you can expect
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Weekly Savings</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(calculatedValues.weeklySavings)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Yearly Savings</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(calculatedValues.yearlySavings)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-2xl font-bold text-primary">
                            {calculatedValues.paybackPeriod.toFixed(1)} months
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 rounded-lg border">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">3-Year ROI</p>
                          <p className="text-2xl font-bold text-primary">
                            {calculatedValues.roiThreeYears.toFixed(0)}%
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Productivity Increase</span>
                        <span className="font-semibold">{calculatedValues.productivityGain}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${calculatedValues.productivityGain}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Error Rate Reduction</span>
                        <span className="font-semibold">{calculatedValues.errorReduction.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(calculatedValues.errorReduction / values.errorRate) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center">
                  <Calculator className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Calculate Your ROI?</h3>
                  <p className="text-muted-foreground">
                    Enter your business metrics and click "Calculate ROI" to see your potential savings.
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}