import DefaultLayout from '@/app/(default)/layout';
import { LoadingScreen } from '@/components/loadingscreen';

export default function Loading() {
  return (
    <DefaultLayout>
      <LoadingScreen />
    </DefaultLayout>
  );
}
