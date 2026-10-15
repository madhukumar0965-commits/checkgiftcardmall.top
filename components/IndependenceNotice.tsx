export default function IndependenceNotice() {
  return (
    <div className="alert independence-alert" role="note">
      <span className="notice-icon" aria-hidden="true">i</span>
      <p><strong>Independent guide, not an issuer.</strong> We cannot check balances, activate cards, access accounts, or resolve transactions. Never send us card details.</p>
    </div>
  );
}
