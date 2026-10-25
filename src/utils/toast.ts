/**
 * Pure logic and helpers for the Novaflow Toast Notification Component.
 */

export interface ToastOptions {
  id?: string;
  title?: string;
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
  showProgress?: boolean;
}

export interface NormalizedToast extends Required<Omit<ToastOptions, 'id'>> {
  id: string;
}

let toastCounter = 0;

export function normalizeToastOptions(
  input: string | ToastOptions,
  fallbackType: 'success' | 'info' | 'warning' | 'error' = 'info'
): NormalizedToast {
  if (typeof input === 'string') {
    return {
      id: `toast-${Date.now()}-${++toastCounter}`,
      title: fallbackType === 'success' ? 'Success' : 'Notice',
      message: input,
      type: fallbackType,
      duration: 4000,
      showProgress: true,
    };
  }

  const type = input.type || fallbackType;
  const defaultTitle =
    type === 'success'
      ? 'Success'
      : type === 'error'
      ? 'Error'
      : type === 'warning'
      ? 'Warning'
      : 'Notification';

  return {
    id: input.id || `toast-${Date.now()}-${++toastCounter}`,
    title: input.title || defaultTitle,
    message: input.message,
    type,
    duration: typeof input.duration === 'number' && input.duration > 0 ? input.duration : 4500,
    showProgress: input.showProgress !== false,
  };
}

export function buildReceiptConfirmationToast(data: {
  fullName: string;
  email: string;
}): ToastOptions {
  const firstName = data.fullName.trim().split(' ')[0] || 'there';
  return {
    title: 'Receipt Confirmed',
    message: `Thank you, ${firstName}! We've confirmed receipt of your inquiry and sent details to ${data.email.trim()}. A systems engineer will respond within 2 hours.`,
    type: 'success',
    duration: 5000,
    showProgress: true,
  };
}
