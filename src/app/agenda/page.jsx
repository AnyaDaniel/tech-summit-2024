export default function SchedulePage() {
    return (
      <div className="max-w-3xl mt-28 mx-auto px-4 py-10 text-gray-800 font-sans">
        <h1 className="text-3xl font-bold mb-4">SBBN Pitch Contest</h1>
        <p className="mb-2"><strong>Date:</strong> June 28, 2025</p>
        <p className="mb-6"><strong>Venue:</strong> 161 Jessop Avenue, Saskatoon SK.</p>
  
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold">{item.time}</h2>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const scheduleItems = [
    {
      time: '9:30 AM - 10:00 AM',
      title: 'Arrival & Registration',
      description:
        'Guests, judges, and participants arrive.\nLight background music, coffee, and snacks available.',
    },
    {
      time: '10:00 AM - 10:05 AM',
      title: 'Opening & Land Acknowledgement',
      description: 'Welcome by Host/MC\nRecognition of traditional Indigenous territories',
    },
    {
      time: '10:05 AM - 10:10 AM',
      title: 'Canadian National Anthem',
      description: '',
    },
    {
      time: '10:10 AM - 10:20 AM',
      title: 'Cultural Performance',
      description: '',
    },
    {
      time: '10:20 AM - 10:30 AM',
      title: 'Speech - Community Supporter - CEO Chambers',
      description: '',
    },
    {
      time: '10:30 AM - 10:40 AM',
      title: 'Speech - Major Sponsor #1 - Prairie Scan',
      description: '',
    },
    {
      time: '10:40 AM - 10:50 AM',
      title: 'Speech - Chairman of the Board',
      description: '',
    },
    {
      time: '10:50 AM - 11:00 AM',
      title: 'Speech - Pitch Lead',
      description: 'Overview of the contest, judging process, and encouragement',
    },
    {
      time: '11:00 AM - 12:00 PM',
      title: 'Pitch Presentations - Part 1',
      description: '5 contestants\n12 minutes each (7 min pitch + 5 min Q&A)',
    },
    {
      time: '12:00 PM - 12:15 PM',
      title: 'Break - Snacks & Coffee',
      description: '',
    },
    {
      time: '12:15 PM - 1:15 PM',
      title: 'Pitch Presentations - Part 2',
      description: '5 contestants\n12 minutes each (7 min pitch + 5 min Q&A)',
    },
    {
      time: '1:15 PM - 1:35 PM',
      title: 'Judges Deliberation & Networking Activity',
      description: 'Light music and informal networking',
    },
    {
      time: '1:35 PM - 1:50 PM',
      title: 'Winner Announcement & Prize Presentation',
      description: 'Delivered by MC',
    },
    {
      time: '1:50 PM - 2:05 PM',
      title: "Winner's Response & Closing Remarks",
      description:
        'Short speech from winner (1-2 minutes)\nFinal thank-yous and wrap-up by host',
    },
    {
      time: '2:05 PM - 2:30 PM',
      title: 'Photo Op & Mingling',
      description:
        'Group photo of all participants and judges\nNetworking, refreshments, and informal interactions',
    },
  ];
  