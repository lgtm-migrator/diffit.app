import * as diffHelper from "diff";

import { useState } from "react";
import { Form, useLoaderData } from "@remix-run/react";

interface DiffRecord {
    one: string,
    two: string
}

let demoDiffs: DiffRecord = {
    one: `
    uses: actions/checkout@master

- name: Setup node env 🏗
uses: actions/setup-node@v2.1.2
with:
node-version: 12
check-latest: true`,
    two: `
    uses: actions/checkout@master

- name: Setup node env 🏗
uses: actions/setup-node@v2.1.5
with:
node-version: 14
check-latest: true`
}

interface CalculatedChangeObject {
    text: string,
    color: "red" | "green" | ""
    change: "added" | "removed" | "same"
}

// export function loader() {
//     return diffs
// }


export default function Index() {

    const [diff1, setDiff1] = useState("");
    const [diff2, setDiff2] = useState("");
    const [diffResults, setDiffResults] = useState([{text: '', color: '', change: ''}])
    
    function diffCalculate() {
        const diffObjects = diffHelper.diffChars(diff1, diff2);

        const result: CalculatedChangeObject[] = [];

        diffObjects.forEach((part: diffHelper.Change) => {
            // green for additions, red for deletions
            // grey for common parts
            const color = part.added ? "green" : part.removed ? "red" : "";
            result.push({
                text: part.value,
                color,
                change: part.added ? "added" : part.removed ? "removed" : "same",
            });
        });

        setDiffResults(result);
    }

    function loadDemo() {
        setDiff1(demoDiffs.one)
        setDiff2(demoDiffs.two)
    }


    // let diffs: DiffRecord = useLoaderData()
    return (
        <div className="">
            <div className="flex mb-6 pa-6">
                <div className="flex-auto"></div>
                <Form className="flex-auto text-center"><textarea defaultValue={diff1} rows={5} wrap={"false"} className="bg-transparent border border-white border-opacity-60"></textarea></Form>
                <Form className="flex-auto text-center"><textarea defaultValue={diff2} rows={5} wrap={"false"} className="bg-transparent border border-white border-opacity-60"></textarea></Form>
                <div className="flex-auto"></div>
            </div>
            <div className="flex justify-center mb-6 pa-6">
                <div className="flex-auto"></div>
                    <button name="diff" className="mx-4 rounded-full px-4 py-1  bg-purple-200 hover:bg-purple-600 opacity-80 text-md-primary" onClick={diffCalculate}>Diff</button>
                    <button name="demo" className="mx-4 rounded-full px-4 py-1 text-gray-900 bg-purple-200 hover:bg-purple-600" onClick={loadDemo}>Demo</button>
                <div className="flex-auto"></div>
            </div>
            <div className="flex justify-center pa-6">
                <div>
                    {diffResults.map((c) => {return (
                    <span className={c.color}>
                        {c.text}
                    </span>)})}
                </div>
            </div>
        </div>
    )

}