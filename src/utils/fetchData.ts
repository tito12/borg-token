interface FetchResult<T> {
  data: T | [];
  loading: boolean;
  error: string | null;
}

export async function fetchData<T>(url: string) {
  const result: FetchResult<T> = {
    data: [],
    loading: true,
    error: null,
  };

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    result.data = await response.json();
  } catch (error) {
    result.error = error instanceof Error ? error.message : "Unknown error";
  } finally {
    result.loading = false;
  }

  return result;
}
