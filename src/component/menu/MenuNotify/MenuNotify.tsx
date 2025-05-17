import NavItemComp from "@/component/navItem/NavItem";
import { contactPeople } from "@/component/contactPeople/contactPeople.config";

const MenuNotify = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full px-[16px] pt-[12px] pb-[4px]">
        <div className="font-semibold text-lg">Notifycation</div>
      </div>

      {contactPeople.map((item, index: number) => {
        return (
          <NavItemComp
            name={item.name}
            imageShow={item.avatar}
            key={index}
            status={true}
            // isOnline={true}
            rouded={true}
            lastTextChat="huy"
            textSize={"text-sm"}
            imageSize={"56"}
            iconChat={true}
          />
        );
      })}
    </div>
  );
};

export default MenuNotify;
