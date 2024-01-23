import { renderHook } from "@testing-library/react-hooks";
import { defaultDays, useNotificationForm } from "./use-notification-form";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToggleStatus } from "@/components/select/switchable-select";
import { act } from "react-dom/test-utils";

const queryClient = new QueryClient();
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Given useNotificationForm", () => {
  describe("When handleSwitchToggle is called where initial toggleStatus is OFF", () => {
    test("Then toggleStatus is set to ON", () => {
      const { result } = renderHook(() => useNotificationForm(), { wrapper: Wrapper });
      expect(result.current.switchToggle).toBe(ToggleStatus.Off);
      act(() => {
        result.current?.handleSwitchToggle();
      });
      expect(result.current.switchToggle).toBe(ToggleStatus.On);
    });
  });

  describe("When handleClick is called with value Monday where visibility is initially true", () => {
    test("Then 'Monday' visibility in form state is toggled to false", () => {
      const { result } = renderHook(() => useNotificationForm(), { wrapper: Wrapper });
      expect(result.current.formMethods.getValues().daysOfWeek).toStrictEqual(defaultDays);
      act(() => {
        result.current.handleClick("Monday");
      });
      expect(result.current.formMethods.getValues().daysOfWeek).toStrictEqual(
        defaultDays.map((day) => (day.day === "Monday" ? { ...day, visible: false } : { ...day })),
      );
    });
  });
});
