//ourdomain.com
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "title",
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
    address: "address",
    description: "description",
  },
  {
    id: "m2",
    title: "title2",
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
    address: "address2",
    description: "description2",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}
export default HomePage;
