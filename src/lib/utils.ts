import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Resume =
  "https://drive.google.com/file/d/131tibFTZkPBOlYoyH2mP-ASw4616fj63/view";
export const MailTo = "mailto:rolvin.noronha12@gmail.com";
export const LinkedIn = "https://www.linkedin.com/in/rolvinnoronha/";
export const GitHub = "https://github.com/RolvinNoronha";
