"use client";
import React, { useState } from "react";
import Link from "next/link";
import ClientOnly from "./ClientOnly";

const VerifyOTP = () => {
    const [numericInput, setNumericInput] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value.replace(/\D/g, ''); // Sadece rakamları koru
        setNumericInput(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form gönderme işlemleri
    };

    return (
        <ClientOnly>
            <div>
                <section className=" main-container bg-neutral-200 dark:bg-neutral-700">
                    <div className=" h-full p-10 mx-auto">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                            <div className="w-full">
                                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                    <div className="g-0 lg:flex lg:flex-wrap">
                                        <div className="px-4 md:px-0 lg:w-6/12">
                                            <div className="md:mx-6 md:p-12">
                                                <div className="text-center">
                                                    <img
                                                        className="mx-auto w-48"
                                                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                        alt="logo"
                                                    />
                                                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                        Did you forget your password?
                                                    </h4>
                                                </div>

                                                <form onSubmit={handleSubmit}>
                                                    <p className="mb-4">Please enter the 6-digit code.</p>
                                                    <div
                                                        className="relative mb-4"
                                                        data-te-input-wrapper-init
                                                    >
                                                        <input
                                                            type="text"
                                                            pattern="[0-9]*"
                                                            value={numericInput} onChange={handleInputChange}
                                                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="exampleFormControlInput11"
                                                            placeholder="Email"
                                                        />
                                                        <label
                                                            htmlFor="exampleFormControlInput11"
                                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        >
                                                            Code
                                                        </label>
                                                    </div>

                                                    <div className="mb-12 pb-1 pt-1 text-center">
                                                        <Link className="hover:text-red-500" href="/auth/verifyOTP">
                                                            <button
                                                                type="submit"
                                                                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                                type="button"
                                                                data-te-ripple-init
                                                                data-te-ripple-color="light"
                                                                style={{
                                                                    background:
                                                                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                                }}
                                                            >

                                                                Submit
                                                            </button>
                                                        </Link>
                                                    </div>

                                                    <div className="flex items-center justify-between pb-6">
                                                        <p className="mb-0 mr-2">Don't have an account?</p>

                                                        <button
                                                            type="button"
                                                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                        >
                                                            <Link className="hover:text-red-500" href="/auth/register">
                                                                Register
                                                            </Link>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                            style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
                                        >
                                            <div className="px-4 py-6 text-white md:mx-6 md:p-12 ">
                                                <h4 className="mb-6 text-xl font-semibold">
                                                    We are more than just a company
                                                </h4>
                                                <p className="text-sm">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ClientOnly>
    );
};

export default VerifyOTP;
