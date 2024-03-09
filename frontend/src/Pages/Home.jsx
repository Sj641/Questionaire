import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import mockData from "../Temp/MOCK_DATA.json";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Home() {
    const [selected, setSelected] = useState(mockData.topics[0]);
    return (
        <div className="mx-auto my-auto">
            <div>
                <h1 className="text-4xl">Welcome to Questionaire</h1>
                <div className="bg-slate-600 shadow-lg transition-shadow shadow-slate-500 rounded-md p-2 mt-2 pt-1">
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <div>
                                <Listbox.Label className="block text-lg font-medium">
                                    Choose Your Topic
                                </Listbox.Label>
                                <div className="relative mt-2">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                        <span className="flex items-center">
                                            <span className="ml-3 block truncate">
                                                {selected.name}
                                            </span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {mockData.topics.map((topic) => (
                                                <Listbox.Option
                                                    key={topic.id}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active
                                                                ? "bg-indigo-600 text-white"
                                                                : "text-gray-900",
                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                        )
                                                    }
                                                    value={topic}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <div className="flex items-center justify-between">
                                                                <span
                                                                    className={classNames(
                                                                        selected
                                                                            ? "font-semibold"
                                                                            : "font-normal",
                                                                        "ml-3 block truncate"
                                                                    )}
                                                                >
                                                                    {topic.name}{" "}
                                                                </span>
                                                                <span
                                                                    className={classNames(
                                                                        selected
                                                                            ? "font-bold"
                                                                            : "font-semibold",
                                                                        "ml-3 block truncate",
                                                                        topic.status
                                                                            ? "text-green-400"
                                                                            : "text-red-400"
                                                                    )}
                                                                >
                                                                    {topic.status
                                                                        ? "Complete"
                                                                        : "Incomplete"}
                                                                </span>
                                                            </div>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active
                                                                            ? "text-white"
                                                                            : "text-indigo-600",
                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                    )}
                                                                >
                                                                    <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </div>
                        )}
                    </Listbox>
                    
                </div>
            </div>
        </div>
    );
}
export default Home;
