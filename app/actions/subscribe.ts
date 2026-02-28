"use server";

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get("email");

  // TODO: 未來可以在這裡連接 Google Sheets 或 ConvertKit API
  // 目前僅在後端控制台記錄，便於測試
  console.log("New Waitlist Subscriber:", email);

  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "訂閱成功！我們已收到您的 Email。"
  };
}
