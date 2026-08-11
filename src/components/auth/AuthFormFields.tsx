import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/Input";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface AuthFormFieldsProps {
  authMode: "signin" | "signup" | "otp";
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export const AuthFormFields = ({
  authMode,
  register,
  errors,
  showPassword,
  setShowPassword,
}: AuthFormFieldsProps) => {
  return (
    <>
      {/* Email Field */}
      <Input
        label="Email Address"
        type="email"
        placeholder="john@doe.com"
        {...register("email")}
        error={errors.email?.message as string}
        leftIcon={<Mail size={18} />}
      />

      {/* Password Field */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="password-input"
            className="text-xs font-semibold text-[#111111]"
          >
            Password
          </label>
          {authMode === "signin" && (
            <a
              href="#forgot"
              onClick={(e) => e.preventDefault()}
              className="text-xs font-medium text-[#C69A63] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C69A63]"
            >
              Forgot password?
            </a>
          )}
        </div>
        <Input
          id="password-input"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          {...register("password")}
          error={errors.password?.message as string}
          leftIcon={<Lock size={18} />}
          rightAction={
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="flex items-center text-[#9CA3AF] transition-colors hover:text-[#111111] focus-visible:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
        />
      </div>
    </>
  );
};
