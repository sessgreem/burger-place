import { useState } from "react";

const useRadioOptions = () => {
    const [radioOptions, setRadioOptions] = useState([
        {
            header: "Drive Thru",
            description: "Drive up and let us know you placed an online order.",
            checked: true,
        },
        {
            header: "Pick Up",
            description:
                "We'll have your order ready at the counter when you arrive.",
            checked: false,
        },
    ]);

    const radioChangeHandler = (header) => {
        const newRadioOptions = radioOptions.map((option) => {
            if (option.header === header) {
                return { ...option, checked: true };
            }
            return { ...option, checked: false };
        });

        setRadioOptions(newRadioOptions);
    };

    return [radioOptions, radioChangeHandler];
};

export default useRadioOptions;
