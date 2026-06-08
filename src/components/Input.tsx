import type { InputProps } from "@/types/types";

const Input = ({ type = "text", placeholder, name, value, onChange, label, list = "" }: InputProps) => {
    return (
        <>
            <label className="block mt-5 capitalize text-sm font-medium text-(--text-secondary)">{label}</label>
            <input list={list} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full mt-1 px-4 py-3 rounded-xl shadow-sm outline-none transition-all duration-200 bg-(--surface) text-(--text) border border-(--border) hover:border-(--accent) focus:border-(--primary) focus:ring-4 focus:ring-(--primary)/20 focus-visible:outline-none" />
        </>
    );
};

export default Input;