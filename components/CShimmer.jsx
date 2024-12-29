
export default function CShimmer() {
  return (
      <>
      {Array.from({length: 50}).map(() => <div className="country-card" style={{height: 350, margin: 30}}></div>)}
      </>
    )
}
