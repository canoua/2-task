import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    multipleDatesSeparator: ' - '
  });
}