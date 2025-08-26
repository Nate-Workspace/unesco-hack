"use client";

import PreviewMode from "./PreviewMode";
import PageHeader from "./PageHeader";
import StepOneBasicInfo from "./StepOneBasicInfo";
import StepTwoScheduling from "./StepTwoScheduling";
import StepThreeReview from "./StepThreeReview";
import Navigation from "./Navigation";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { DebateSchema, DebateFormData } from "@/lib/validation/debate";
import { createDebateAction } from "../actions";

export default function CreateDebateClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [previewMode, setPreviewMode] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const form = useForm<DebateFormData>({
    resolver: zodResolver(DebateSchema),
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
      sides: [],
    },
  });

  const watchedValues = form.watch();

  const onSubmit = async (data: DebateFormData) => {
    setSubmitError(null);
    setSubmitSuccess(null);

    // Check client-side errors
    if (Object.keys(form.formState.errors).length > 0) {
      setSubmitError("Please fill all the necessary information correctly.");
      return;
    }

    try {
      await createDebateAction(data);
      setSubmitSuccess("Debate created successfully!");
      form.reset();
    } catch (err: any) {
      setSubmitError("Error creating debate: " + err.message);
    }
  };

  if (previewMode) {
    return <PreviewMode watchedValues={watchedValues} setPreviewMode={setPreviewMode} />;
  }

  return (
    <>
      <PageHeader currentStep={currentStep} setPreviewMode={setPreviewMode} />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Form {...form}>
              <form id="debate-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {submitError && (
                  <div className="p-3 text-red-700 bg-red-100 rounded">{submitError}</div>
                )}
                {submitSuccess && (
                  <div className="p-3 text-green-700 bg-green-100 rounded">{submitSuccess}</div>
                )}

                {currentStep === 1 && <StepOneBasicInfo form={form} />}
                {currentStep === 2 && <StepTwoScheduling form={form} />}
                {currentStep === 3 && <StepThreeReview form={form} watchedValues={watchedValues} />}

                <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} form={form} />
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
