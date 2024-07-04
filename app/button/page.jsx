import Button from "@/components/Button";

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center p-24 bg-white">
        {/* Demonstration of input types, sizes, and functions like disbled */}
        <Button
            color="red"
            textColor="white"
            text="This is a button"
        />
        <Button
            color="green"
            textColor="white"
            text="This is a button"
        />
        <Button
            color="yellow"
            textColor="black"
            text="This is a button"
        />
        <Button
            color="gray"
            textColor="black"
            text="This is a button"
        />
        <Button
            color="pink"
            textColor="black"
            text="This is a button"
        />
        <Button
            color="white"
            textColor="black"
            text="This is a button"
        />
        <Button
            color="black"
            textColor="white"
            text="This is a button"
        />
        <Button
            color="transparent"
            textColor="black"
            text="This is a button"
        />
    </main>;

};
