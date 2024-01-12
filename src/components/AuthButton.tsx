"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginButton = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      if (!res?.error) {
        setFormValues({ username: "", password: "" });
        toast({
          title: "Success",
          description: "Login berhasil.",
          variant: "success",
        });

        setTimeout(() => {
          router.push(callbackUrl);
          router.refresh();
        }, 500);
      } else {
        toast({
          title: "Error",
          description: "Gagal login. Periksa username dan password Anda.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      setLoading(false);
      console.error("Error login:", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold">Login</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={onSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Katasandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Katasandi"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <Button
            style={loading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
            type="submit"
            className="bg-loginBtn hover:bg-loginBtnHover"
            disabled={loading}
          >
            {loading ? "loading..." : "Masuk"}
          </Button>
        </form>
        <DialogFooter className="w-full !items-center !justify-center ">
          <p className="font-extralight">
            Apakah anda sudah punya akun?{" "}
            <DialogClose asChild>
              <Link className="font-bold hover:underline" href="/register">
                Daftar
              </Link>
            </DialogClose>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const LogoutButton = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })} variant="outline">
      Logout
    </Button>
  );
};
