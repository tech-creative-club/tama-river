
async function Handler() {
  // const content: SummaryCard[] = randomItems();
  const content: SummaryCardProp[] = await getArchiveByFQDN(
    "www.city.chofu.lg.jp",
  );
  return Response.json(content);
}

export { Handler as POST };