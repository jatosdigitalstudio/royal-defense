import { Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,} from "@material-tailwind/react"
import Image from "next/image"

export default function TabsCustom({data}) {
    return (
        <Tabs 
            value="Cyber Intelligence & Security" 
            orientation="vertical" 
            placement="top"
            id="custom-animation"
            className="flex flex-col md:flex-row"
            >
            <TabsHeader 
                className="bg-transparent w-[300px] mb-4 lg:mr-20 " 
                indicatorProps={{
                    className: "bg-purple-900/10 shadow-none !text-gray-900 cursor-none",
                }}>
                {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="!justify-start py-3 cursor-none">
                    {label}
                </Tab>
                ))}
            </TabsHeader>
            <TabsBody 
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
            >
                {data.map(({ value, image }) => (
                <TabPanel key={value} value={value} className="flex p-0">
                    <Image src={image} key={value} width={350} height={350} className="flex" />
                </TabPanel>
                ))}
            </TabsBody>
        </Tabs> 
        
    )
}