import React from "react"
import Haq from "./faq"
import FaqData from "./FaqData"
import '../App.css'

export default function App() {

    const faq = FaqData.map(prev => {
        return (
            <Haq
                key={prev.id}
                setup={prev.setup} 
                punchline={prev.punchline} 
            />
        )
    })
    return (
        <div className="faq">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            {faq}
        </div>
    )
}
