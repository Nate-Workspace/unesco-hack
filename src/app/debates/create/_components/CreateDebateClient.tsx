"use client";

import PreviewMode from "./PreviewMode";
import PageHeader from "./PageHeader";
import StepOneBasicInfo from "./StepOneBasicInfo";
import StepTwoScheduling from "./StepTwoScheduling";
import StepThreeReview from "./StepThreeReview";
import Navigation from "./Navigation";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CreateDebateClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [previewMode, setPreviewMode] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      topic: "",
      date: "",
      time: "",
      duration: "60",
      applicationDeadline: "",
      maxDebaters: "2",
      format: "oxford",
      rules: "",
      tags: "",
    },
  });

  const watchedValues = form.watch();

  const onSubmit = (data: any) => {
    console.log("[v0] Form submitted:", data);
  };

  if (previewMode) {
    return (
      <PreviewMode
        watchedValues={watchedValues}
        setPreviewMode={setPreviewMode}
      />
    );
  }

  return (
    <>
      <PageHeader currentStep={currentStep} setPreviewMode={setPreviewMode} />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Form {...form}>
              <form
                id="debate-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {currentStep === 1 && <StepOneBasicInfo form={form} />}
                {currentStep === 2 && <StepTwoScheduling form={form} />}
                {currentStep === 3 && (
                  <StepThreeReview
                    form={form}
                    watchedValues={watchedValues}
                  />
                )}

                <Navigation
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  form={form}
                />
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
