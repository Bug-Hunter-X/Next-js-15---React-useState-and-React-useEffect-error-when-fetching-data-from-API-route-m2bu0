```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error in Next.js 15
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default About;
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  res.status(200).json({ text: 'This is some sample data' });
}
```