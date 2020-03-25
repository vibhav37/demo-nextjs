import { useRouter } from 'next/router';

export default function People(props) {
  const router = useRouter();

  return (
    <h1>This is from people route</h1>
  );
}