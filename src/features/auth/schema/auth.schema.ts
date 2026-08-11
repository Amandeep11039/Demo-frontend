import * as z from "zod";

export const getAuthSchema = (authMode: string, otpSent: boolean) => {
  if (authMode === "otp") {
    return z.object({
      mobile: z
        .string()
        .min(1, "Mobile number is required")
        .regex(/^\d{10}$/, "Must be a valid 10-digit number"),
      otpCode: otpSent
        ? z
            .string()
            .min(1, "OTP is required")
            .regex(/^\d{4}$/, "Must be 4 digits")
        : z.string().optional(),
      rememberMe: z.boolean().optional(),
    });
  }
  return z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().optional(),
  });
};
