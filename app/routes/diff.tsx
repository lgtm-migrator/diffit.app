import { useLoaderData } from "@remix-run/react";

let demoDiffs = {
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

let diffs = demoDiffs

export async function loader() {
    return diffs;
}

interface DiffRecords {
    one: string,
    two: string
}

export default function Diff() {
    let diffs: DiffRecords = useLoaderData()
    return (
        <div className="d-flex justify-center mb-6 pa-6">
            <div className="d-flex justify-center mb-6 pa-6">
                <form><textarea defaultValue={diffs.one} className="dark"></textarea></form>
                <form><textarea defaultValue={diffs.two}></textarea></form>
            </div>
        </div>
    )

}