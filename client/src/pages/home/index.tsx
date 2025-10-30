import useAuthStore from "@/store/auth.store";
import Loading from "@/components/ui/loading";

export default function Home() {

  const { loading } = useAuthStore();
  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      
    </div>
  );
}
