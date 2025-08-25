"use client"

import { Button } from "@/components/ui/button"

export default function Navigation({ currentStep, setCurrentStep, form }: any) {
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="flex justify-between pt-6 border-t">
      <Button type="button" variant="outline" disabled={currentStep === 1} onClick={prevStep}>
        Back
      </Button>

      {currentStep < 3 ? (
        <Button type="button" onClick={nextStep}>
          Next
        </Button>
      ) : (
        <Button type="submit" form="debate-form">
          Submit
        </Button>
      )}
    </div>
  )
}
