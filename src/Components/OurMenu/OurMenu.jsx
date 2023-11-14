import Card from "../../Shared/Card";
import SectionTitle from "../../Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";

const OurMenu = () => {
  const [menus] = useMenu();
  const popularMenu = menus.filter(
    (popularData) => popularData.category === "popular"
  );

  /* const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter(
          (popularData) => popularData.category === "popular"
        );
        setMenus(popularMenu);
      });
  }, []); */

  return (
    <div>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className='container mx-auto grid md:grid-cols-2 gap-16 my-20'>
        {popularMenu?.map((menu) => (
          <Card key={menu._id} menu={menu}></Card>
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-outline text-white border-0 border-b-2'>
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
