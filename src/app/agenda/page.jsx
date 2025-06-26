export default function AgendaPage() {
  const agendaItems = [
    {
      time: "9:30 AM - 10:00 AM",
      title: "Arrival & Registration",
      description:
        "Guests, judges, and participants arrive. Light background music, coffee, and snacks available.",
    },
    {
      time: "10:00 AM - 10:05 AM",
      title: "Opening & Land Acknowledgement",
      description:
        "Welcome by Host/MC\nRecognition of traditional Indigenous territories",
    },
    {
      time: "10:05 AM - 10:10 AM",
      title: "Canadian National Anthem",
      description: "",
    },
    {
      time: "10:10 AM - 10:20 AM",
      title: "Cultural Performance",
      description: "",
    },
    {
      time: "10:20 AM - 10:30 AM",
      title: "Speech - Community Supporter",
      description: "Delivered by CEO Chambers",
    },
    {
      time: "10:30 AM - 10:40 AM",
      title: "Speech - Major Sponsor #1",
      description: "Delivered by PrairiesCan",
    },
    {
      time: "10:40 AM - 10:50 AM",
      title: "Speech - Chairman of the Board",
      description: "",
    },
    {
      time: "10:50 AM - 11:00 AM",
      title: "Speech - Pitch Lead",
      description: "Overview of the contest, judging process, and encouragement",
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "Pitch Presentations - Part 1",
      description: "5 contestants\n12 minutes each (7 min pitch + 5 min Q&A)",
    },
    {
      time: "12:00 PM - 12:15 PM",
      title: "Break",
      description: "Snacks & Coffee",
    },
    {
      time: "12:15 PM - 1:15 PM",
      title: "Pitch Presentations - Part 2",
      description: "5 contestants\n12 minutes each (7 min pitch + 5 min Q&A)",
    },
    {
      time: "1:15 PM - 1:35 PM",
      title: "Judges Deliberation & Networking",
      description: "Light music and informal networking",
    },
    {
      time: "1:35 PM - 1:50 PM",
      title: "Winner Announcement & Prize Presentation",
      description: "Delivered by MC",
    },
    {
      time: "1:50 PM - 2:05 PM",
      title: "Winner's Response & Closing Remarks",
      description: "Short speech from winner (1-2 minutes)\nFinal thank-yous and wrap-up by host",
    },
    {
      time: "2:05 PM - 2:30 PM",
      title: "Photo Op & Mingling",
      description: "Group photo of all participants and judges\nNetworking, refreshments, and informal interactions",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto mt-20 px-4 py-16 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">SBBN Pitch Contest Agenda</h1>
        <p className="text-lg text-gray-600">Saturday, June 28, 2025</p>
        <p className="text-gray-600">161 Jessop Avenue, Saskatoon SK</p>
      </header>

      <div className="space-y-10">
        {agendaItems.map((item, index) => (
          <div key={index} className="border-l-4 border-pink-500 pl-4">
            <h3 className="text-xl font-semibold">{item.time}</h3>
            <p className="font-medium text-gray-800">{item.title}</p>
            {item.description && (
              <p className="text-gray-600 whitespace-pre-line mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
