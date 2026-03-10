import DashboardLayout from "../layout/DashboardLayout"
import AlumniCard from "../components/AlumniCard"

function AlumniDirectory() {

  const alumni = [
    {
      name: "Rahul Sharma",
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Priya Singh",
      company: "Microsoft",
      role: "Product Manager",
      location: "Hyderabad",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Amit Verma",
      company: "Amazon",
      role: "Cloud Engineer",
      location: "Pune",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Sneha Kapoor",
      company: "Adobe",
      role: "UI Designer",
      location: "Delhi",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ]

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Alumni Directory
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {alumni.map((person, index) => (
          <AlumniCard
            key={index}
            name={person.name}
            company={person.company}
            role={person.role}
            location={person.location}
            image={person.image}
          />
        ))}

      </div>

    </DashboardLayout>

  )
}

export default AlumniDirectory