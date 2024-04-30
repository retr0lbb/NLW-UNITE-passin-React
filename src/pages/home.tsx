import { Card } from "../components/dashbord-graphs/card"


export const HomeDashboard: React.FC = () => {
    return(
        <main className="w-screen h-screen flex flex-col p-10 bg-zinc-900">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <div className="w-full grid grid-cols-4 mt-5 gap-1.5"> 
                
                <Card title="Attendee check-in rate" 
                description="this shows the number of attendees that has maked the check-in" >
                    <h1 className="text-4xl font-bold">134 of 452</h1>
                </Card>

                <Card className="col-span-2 row-span-2" title="Percent of paying attendees" 
                description="shows the percent of paying attendees" >
                    <h1 className="text-4xl font-bold">76.90%</h1>
                </Card>

                <Card title="Attendee check-in rate" 
                description="this shows the number of attendees that has maked the check-in" >
                    <h1 className="text-4xl font-bold">134 of 452</h1>
                </Card>
            </div>
        </main>
    )
}