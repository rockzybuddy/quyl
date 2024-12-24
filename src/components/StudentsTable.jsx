import img1 from "../assets/image1.png"
import img2 from "../assets/image.png"
const students = [
  { name: "Anshuman Kashyap", status: "online" },
  { name: "Bansi Dadhaniya", status: "online" },
  { name: "Chandrika Valotia", status: "offline" },
  { name: "Devang Dave", status: "online" },
  { name: "Esha Patel", status: "offline" },
  { name: "Farhan Shaikh", status: "online" },
  { name: "Gauri Desai", status: "offline" },
  { name: "Harsh Vardhan", status: "online" },
  { name: "Ishita Mehra", status: "offline" },
  { name: "Jay Mehta", status: "online" },
];


const StudentsTable = () => {
  return (
    <div className="p-6 overflow-auto bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-700">
            <th className="py-2 px-4">Student Name</th>
            <th className="py-2 px-4">Cohort</th>
            <th className="py-2 px-4">Courses</th>
            <th className="py-2 px-4">Date Joined</th>
            <th className="py-2 px-4">Last Login</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">AY 2024-25</td>
              <td className="py-2 px-4 flex gap-2">
                <div className="flex items-center space-x-2 bg-gray-100 rounded px-2 py-1">
                  <img
                    src={img1}
                    alt="science"
                    className="w-5 h-5"
                  />
                  <span>CBSE 9 Science</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded px-2 py-1">
                  <img
                    src={img2}
                    alt="math"
                    className="w-5 h-5"
                  />
                  <span>CBSE 9 Math</span>
                </div>
              </td>
              <td className="py-2 px-4">17 Nov. 2024</td>
              <td className="py-2 px-4">17 Nov. 2024 4:16 PM</td>
              <td className="py-2 px-4">
                <span
                  className={`w-3 h-3 rounded-full inline-block ${
                    student.status === "online" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
