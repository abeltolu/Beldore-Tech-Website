import { transparentize } from 'polished';
import React from 'react';
import Select, { Props, OptionTypeBase, GroupTypeBase } from 'react-select';

const StyledSelect: React.FC<Props<OptionTypeBase, boolean>> = (props) => {
    const customStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            ...styles,
            fontSize: 'var(--fz-sm)',
            lineHeight: '1.2',
            backgroundColor: isDisabled
                ? null
                : isSelected
                ? data.color
                : isFocused
                ? 'var(--light-green)'
                : null,
        }),
        control: (styles, state) => ({
            ...styles,
            borderRadius: 0,
            minHeight: 40,
            border: 'none',
            borderBottom: `1px solid ${transparentize(0.5, '#000')}`,
            borderColor: state.isFocused
                ? `${transparentize(0.1, '#56BCA0')} !important`
                : 'inherit',
            boxShadow: 'none',
        }),
        valueContainer: (styles) => ({
            ...styles,
            padding: '4px 0px',
        }),
        multiValue: (styles) => ({
            ...styles,
            borderRadius: 4,
            margin: 2,
            padding: '6px 8px',
            alignItems: 'center',
        }),
        multiValueLabel: (styles) => ({
            ...styles,
            fontSize: 'var(--fz-sm)',
            lineHeight: '1.2',
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            marginLeft: 8,
            padding: 0,
            ':hover': {
                backgroundColor: 'none',
            },
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            display: 'none',
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            display: 'none',
        }),
        menu: (styles) => ({
            ...styles,
            marginTop: 0,
            borderTopWidth: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        }),
        menuList: (styles) => ({
            ...styles,
            maxHeight: 210,
        }),
        placeholder: (styles) => ({
            ...styles,
            fontSize: 'var(--fz-sm)',
            lineHeight: '1.2',
            fontWeight: '400',
            color: 'var(--light-black)',
        }),
        noOptionsMessage: (styles) => ({
            ...styles,
            fontSize: 'var(--fz-sm)',
            lineHeight: '1.2',
            textAlign: 'left',
        }),
        input: (styles) => ({
            ...styles,
            fontSize: 'var(--fz-sm)',
            lineHeight: '1.2',
        }),
    };

    return <Select styles={customStyles} {...props} />;
};

export default StyledSelect;
