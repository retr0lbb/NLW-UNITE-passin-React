import { Card } from "../components/dashbord-graphs/card"
import {ChevronLeft} from "lucide-react"
import { Link } from "react-router-dom"



export const HomeDashboard: React.FC = () => {
    return(
        <main className="w-screen h-screen flex flex-col p-10 bg-zinc-900">
            <div className="flex items-center gap-2">
                
            <Link to={"/"}>
                <ChevronLeft size={32} 
                className="text-zinc-500 cursor-pointer transition-all hover:scale-105 hover:text-zinc-300"/>
            </Link>
                
                <h1 className="text-5xl font-bold">Dashboard</h1>
            </div>
            <div className="w-full h-full grid grid-cols-4 mt-5 gap-1.5"> 
                
                <Card title="Attendee check-in rate" 
                description="this shows the number of attendees that has maked the check-in" >
                    <h1 className="text-4xl font-bold">134 of 452</h1>
                </Card>

                <Card title="Latest Attendee" 
                description="shows the latest attendee subscriber" >
                    <div className="flex items-center justify-center gap-3">
                        <div className="size-16 bg-white rounded-full" />
                        <div>
                            <p className="font-bold text-xl">Laura Campbell</p>
                            <p className="text-zinc-400">created at 28/4/2024</p>
                        </div>
                    </div>
                </Card>

                <Card className="col-span-2 row-span-2" title="Percent of paying attendees" 
                description="shows the percent of paying attendees" >
                    <p>TXTR</p>
                </Card>

                <Card title="Attendee check-in rate" 
                description="this shows the number of attendees that has maked the check-in" >
                    <h1 className="text-4xl font-bold">134 of 452</h1>
                </Card>
            </div>
        </main>
    )
}