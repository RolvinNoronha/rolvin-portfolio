import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Resume =
  "https://drive.google.com/file/d/1R4Unj-R9AZU2VA5a78ktg9MmTS7M2V-g/view?usp=sharing";
export const MailTo = "mailto:rolvin.noronha12@gmail.com";
export const LinkedIn = "https://www.linkedin.com/in/rolvinnoronha/";
export const GitHub = "https://github.com/RolvinNoronha";
