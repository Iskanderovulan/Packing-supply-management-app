import { FC } from "react";
import { DatePicker, Button, Flex } from "antd";
import { DayjsType } from "@features/Filter/model/types/valueGroup";
import cls from "./DatePickerFilter.module.scss";
import { TFunction } from "i18next";

interface DatePickerFilterProps {
    selectedValue: DayjsType;
    onChange: (value: DayjsType | null) => void;
    t: TFunction;
}

export const DatePickerFilter: FC<DatePickerFilterProps> = (props) => {
    const { selectedValue, onChange, t } = props;
    const handleDateChange = (dates: DayjsType | null) => {
        onChange(dates || null);
    };

    const handleReset = () => {
        onChange(null);
    };

    return (
        <>
            <DatePicker.RangePicker
                value={selectedValue}
                onChange={handleDateChange}
                placeholder={[t("startDate"), t("endDate")]}
            />{" "}
            <Flex className={cls.flex} justify="end" gap="small">
                <Button type="dashed" size="small" onClick={handleReset}>
                    {t("reset")}
                </Button>
            </Flex>
        </>
    );
};
