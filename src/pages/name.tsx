// pages/name.tsx
import Link from "next/link";

const NamePage = () => {
  return (
    <div>
      <h1>Your Name Page</h1>
      <p>This is a simple page to display your name.</p>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NamePage;
