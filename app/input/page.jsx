import Input from "@/components/Input";

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center p-24 bg-white">
        {/* Demonstration of input types, sizes, and functions like disbled */}
        <Input
            name="Small"
            label="Small"
            size="sm"
            underText="This is a small input"
        />
        <Input
            name="Medium"
            label="Medium"
            size="md"
            underText="This is a medium input"
        />
        <Input
            name="Large"
            label="Large"
            size="lg"
            underText="This is a large input"
        />
        <Input
            name="Extra Large"
            label="Extra Large"
            size="xl"
            underText="This is an extra large input"
        />
        <Input
            name="Disabled"
            label="Disabled"
            disabled
        />
        <Input
            name="Required"
            label="Required"
            required
        />
        <Input
            name="Under Text"
            label="Under Text"
            underText="This is under text"
        />
    </main>;
};
