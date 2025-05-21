const About = () => {
  const userInfo = {
    work: "",
    highSchool: "",
    college: "",
    liveIn: "Biên Hòa",
    from: "Biên Hòa",
    relationship: "",
    phone: "091 791 99 48",
  };

  const fields = [
    { label: "Nơi làm việc", key: "work", placeholder: "Thêm nơi làm việc" },
    {
      label: "Trường trung học",
      key: "highSchool",
      placeholder: "Thêm trường trung học",
    },
    {
      label: "Trường cao đẳng/đại học",
      key: "college",
      placeholder: "Thêm trường cao đẳng/đại học",
    },
    { label: "Sống tại", key: "liveIn" },
    { label: "Đến từ", key: "from" },
    {
      label: "Tình trạng mối quan hệ",
      key: "relationship",
      placeholder: "Thêm tình trạng mối quan hệ",
    },
    { label: "Số điện thoại", key: "phone" },
  ];

  return (
    <div className="mt-4 w-full  bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Thông tin cá nhân
      </h2>

      {fields.map((field) => (
        <div key={field.key} className="flex items-center space-x-4">
          <label className="w-48 text-sm text-gray-700 font-medium shrink-0">
            {field.label}
          </label>
          <input
            type="text"
            defaultValue={userInfo[field.key as keyof typeof userInfo]}
            placeholder={field.placeholder || ""}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}
    </div>
  );
};

export default About;
