import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const pathname = usePathname();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    role: "student",
    acquisition: "",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        acquisition: checked ? value : "",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const userData = {
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      role: form.role,
      acquisition: form.acquisition,
    };
    console.log('Saving userData:', userData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('isSignedUp', 'true');
    }
    // Redirect to dashboard
    router.push('/dashboard');
  };

  useEffect(() => {
    const checkSignup = () => {
      setShowError(localStorage.getItem('isSignedUp') === 'true');
    };
    checkSignup();
    window.addEventListener('storage', checkSignup);
    return () => {
      window.removeEventListener('storage', checkSignup);
    };
  }, []);

  useEffect(() => {
    setShowError(localStorage.getItem('isSignedUp') === 'true');
  }, [pathname]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] max-w-[50rem] mx-auto rounded-md shadow-md px-8 py-4 mt-24 mb-16 bg-[#333] ">
      <h2 className="text-center text-gray-200 text-xl">Welcome !</h2>
      <h4 className="text-[10px] text-center text-gray-300">
        We just need a little bit of data from you to get you started 🚀
      </h4>
      <div className="my-4">
        <div className="">
          <label
            className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold"
            htmlFor="email">
            email
          </label>
          <input
            className="block w-full max-w-[15rem] p-1 rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
          <div>
            <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
              password
            </label>
            <input
              className="block w-full max-w-[15rem] p-1 rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
              type="password"
              name="password"
              minLength={6}
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
              confirm-password
            </label>
            <input
              className="block w-full max-w-[15rem] p-1 rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {showError && (
              <p className="text-red-500 text-xs">Password must match</p>
            )}
          </div>
        </div>
      </div>
      <hr className="text-white" />
      <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
        <div>
          <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
            First Name
          </label>
          <input
            className="block w-full max-w-[15rem] p-1 rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold" htmlFor="lastName">Last Name</label>
          <input
            className="block w-full max-w-[15rem] p-1 rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
            type="text"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label
            className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold"
            htmlFor="address">
            Address
          </label>
          <input
            className="block w-full max-w-[15rem] p-1 rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
            type="text"
            name="address"
            required
            value={form.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold"
          htmlFor="role">
          what best describe your role?
        </label>
        <select
          className="block w-full max-w-[15rem] p-2 text-base rounded border border-[#758a8a] bg-[#869999] text-[#142020]"
          name="role"
          required
          value={form.role}
          onChange={handleChange}
        >
          <option value="student">student</option>
          <option value="teacher">teacher</option>
          <option value="employee">employee</option>
          <option value="founder">founder</option>
          <option value="other">other</option>
        </select>
      </div>
      <fieldset className="mt-2">
        <p className="text-gray-300 my-2">How did you find us?</p>
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="acquisition"
            className="inline-block w-auto max-w-none mr-2 rounded-none border-none bg-transparent text-[#d9e2f1]"
            value="google"
            checked={form.acquisition === "google"}
            onChange={handleChange}
          />
          <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
            google
          </label>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="acquisition"
            className="inline-block w-auto max-w-none mr-2 rounded-none border-none bg-transparent text-[#d9e2f1]"
            value="friends"
            checked={form.acquisition === "friends"}
            onChange={handleChange}
          />
          <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
            By friends
          </label>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="acquisition"
            className="inline-block w-auto max-w-none mr-2 rounded-none border-none bg-transparent text-[#d9e2f1]"
            value="other"
            checked={form.acquisition === "other"}
            onChange={handleChange}
          />
          <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
            other
          </label>
        </div>
      </fieldset>
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          required
          className="inline-block w-auto max-w-none mr-2 rounded-none border-none bg-transparent text-[#d9e2f1]"
        />
        <label className="block text-[0.8rem] mb-[0.2rem] text-[#9bafaf] uppercase font-bold">
          I agree to the terms and conditions
        </label>
      </div>
      <div className="flex items-center justify-end space-x-4 mt-4 ">
        <button
          type="reset"
          className="text-gray-300 font-semibold cursor-pointer hover:text-[#319890]">
          Reset
        </button>
        <button
          type="submit"
          className="px-3 py-1 rounded-md shadow-md cursor-pointer bg-[#147b73] text-[#d9e2f1] hover:bg-[#319890]">
          Sign up
        </button>
      </div>
    </form>
  );
}
