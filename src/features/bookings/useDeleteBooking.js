import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingFn } from '../../services/apiBookings';
import toast from 'react-hot-toast';

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingFn(bookingId),
    onSuccess: () => {
      toast.success('Booking successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}

export default useDeleteBooking;
