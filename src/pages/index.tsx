// pages/index.tsx
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>
        Go to the <Link href="/name">Name Page</Link>
      </p>
    </div>
  );
};

export default HomePage;
