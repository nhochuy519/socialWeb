import Image from "next/image";

import CardImage from "../cardImage/CardImage";
const ListCard = ({
  title,
  friend = false,
}: {
  title: string;
  friend: boolean;
}) => {
  const friends = [
    { name: "Nguyễn Văn Tài" },
    { name: "Trần Đạt" },
    { name: "Hoàng Long" },
    { name: "Văn Tài Nguyễn" },
    { name: "Tú Quang Nguyen" },
    { name: "Phạm Hải" },
    { name: "Hieu Hoang" },
    { name: "Phạm Kiệt" },
    { name: "Châu Khắc Nhật Cường" },
  ];

  return (
    <div className="p-4 rounded-lg bg-white shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          Xem tất cả {title.toLowerCase()}
        </a>
      </div>
      {friend && <p className="text-sm text-gray-500 mb-4">31 người bạn</p>}

      <div className="grid grid-cols-3 gap-3">
        {friends.map((friend, index: number) => (
          <CardImage name={true} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListCard;
