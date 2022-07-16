import tw from "tailwind-styled-components";
import Map from "./components/map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Link href="/profile">
          <Profile>
            <Name>Sefa Esendemir</Name>
            <UserImage src="https://pbs.twimg.com/profile_images/378800000717582304/1dfa5b3e9dc8eb4280bbf74048911ea3_400x400.jpeg" />
          </Profile>
          </Link>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28`;

const Profile = tw.div`
flex items-center`;

const Name = tw.div`
mr-4 w-21 text-xl`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
flex h-20 bg-gray-200 text-2xl p-4 items-center mt-8
`;
