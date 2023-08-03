import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import styles from './Fields.module.css'


function Input({ type, placeholder, onChange, label, value, min, max }) {
    return (
        <>
            {
                label ?
                    <div className={styles.container}>
                        <label className={styles.label}>{label}</label>
                        <OutlinedInput
                            autoFocus={true}
                            className={styles.input}
                            name={label}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            onChange={onChange}
                            size='small'
                            min={min}
                            max={max}
                        />
                    </div>
                    :
                    <div className={styles.containerWithoutLabel}>
                        <OutlinedInput
                            autoFocus={true}
                            className={styles.input}
                            type={type}
                            name={label}
                            value={value}
                            placeholder={placeholder}
                            onChange={onChange}
                            size='small'
                            min={min}
                            max={max}
                        />
                    </div>
            }
        </>
    )
}

export default Input