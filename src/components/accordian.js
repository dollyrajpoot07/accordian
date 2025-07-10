'use client';
import React, { useState } from 'react';
import styles from './accordian.module.css';

const faqData = [
    {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
        question: 'What are hooks in React?',
        answer: 'Hooks let you use state and lifecycle features without writing a class.'
    },
    {
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension that looks like HTML and is used with React.'
    }
];

export default function AccordionFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className={styles.container}>
            <h2>Frequently Asked Questions</h2>
            {faqData.map((item, index) => (
                <div key={index} className={styles.accordionItem}>
                    <div className={styles.question} onClick={() => toggle(index)}>
                        {item.question}
                        <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className={styles.answer}>{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
